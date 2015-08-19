describe("stringByNum", function() {

  it("Тест с целым числом", function() {
    start = new Date().getTime();
    //expect(stringByNum(8)).toBe('31131211131221');
    console.log(stringByNum(58));
    elapsed = new Date().getTime() - start;
    console.log(elapsed);
  });

  it("Тест с отрицательным числом", function() {
    expect(stringByNum(-1)).toBe(-1);
  });

  it("Тест с дробным числом", function() {
    expect(stringByNum(8.8)).toBe(-1);
  });

   it("Тест с массивом", function() {
    expect(stringByNum([7, 8, 17, 22])).toBe(-1);
  });
});