const lib = require('../lib');
const db = require('../db');
const mail = require('../mail');

describe('absolute', () => {
  it('should return a positive number if input is positive', () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it('should return a positive number if input is negative', () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it(' should return 0 if input is 0', () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe('greet', () => {
  it('should return the greeting message', () => {
    const result = lib.greet('Mosh' + '!');
    expect(result).toMatch(/Mosh/);
  });
});

describe('getCurrencies', () => {
  it('should return supported currencies', () => {
    const result = lib.getCurrencies();

    //Too general-useless
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    //Too specific-dont look for exact location
    expect(result[0]).toBe('USD');
    expect(result[1]).toBe('AUD');
    expect(result[2]).toBe('EUR');
    expect(result.length).toBe(3);

    //Proper way
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
    //Ideal Way
    expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']));
  });
});

describe('getProduct', () => {
  it('should return object with id and price', () => {
    const result = lib.getProduct(1);
    expect(result).toMatchObject({ id: 1, price: 10 });
  });
});

describe('registerUser', () => {
  it('should throw if username is falsy', () => {
    const args = [null, undefined, NaN, '', 0, false];
    args.forEach((a) =>
      expect(() => {
        lib.registerUser(a);
      }).toThrow()
    );
  });
  it('should return a userObject if valid username is passes', () => {
    const result = lib.registerUser('mosh');
    expect(result).toMatchObject({ username: 'mosh' });
    expect(result.id).toBeGreaterThan(0);
  });
});

describe('applyDiscouint', () => {
  it('should apply 10% discount if customer has more than 10 points', () => {
    db.getCustomerSync = function (customerId) {
      console.log('fake reading customer');
      return { id: customerId, points: 20 };
    };

    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

describe('notifyCustomer', () => {
  it('should send an email to the customer', () => {
    // const mockFunction = jest.fn();
    // mockFunction.mockReturnValue(1);
    // mockFunction.mockResolvedValue(1);
    // mockFunction.mockRejectedValue(new Error('...'));
    // const result = mockFunction();

    db.getCustomerSync = jest.fn().mockReturnValue({ email: 'a' });
    mail.send = jest.fn();

    lib.notifyCustomer({ customerId: 1 });

    expect(mail.send).toHaveBeenCalled();
    expect(mail.send.mock.calls[0][0]).toBe('a');
    expect(mail.send.mock.calls[0][1]).toMatch(/order/);
  });
});
