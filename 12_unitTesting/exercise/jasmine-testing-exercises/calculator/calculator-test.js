let values = {amount:100, rate:6, years:.08333};

it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(values).toFixed(2)).toBe('150.00');

});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment(values).toFixed(2)).not.toBe('150.000');
  expect(calculateMonthlyPayment(values).toFixed(2)).not.toBe('150.0');
  expect(calculateMonthlyPayment(values).toFixed(2)).toBe('150.00');
  
});

