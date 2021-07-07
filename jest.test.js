  test('test common matcher', () => {
      expect( 2 + 2 ).toBe(4)
      expect( 2 + 2 ).not.toBe(5)
  })

  test('test to be true or false', () => {
      expect(1).toBeTruthy()
      expect(0).toBeFalsy()
  })

  test('test number', () => {
      expect(5).toBeGreaterThan(3)
      expect(5).toBeLessThan(6)
  })

  test('test object', () => {
      // 测试对象是否相同时， toBe 是指 完全相同 （引用）
      // toEqual 是指值相同
    //   expect({name: 'g'}).toBe({name: 'g'})
      expect({name: 'g'}).toEqual({name: 'g'})
  })  