/* eslint-disable no-undef */
const itActsAsFavoriteRestoModel = (favResto) => {
  it('should return the restaurant that has been added', async () => {
    favResto.putResto({ id: 1 });
    favResto.putResto({ id: 2 });

    expect(await favResto.getResto(1)).toEqual({ id: 1 });
    expect(await favResto.getResto(2)).toEqual({ id: 2 });
    expect(await favResto.getResto(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favResto.putResto({ aProperty: 'property' });

    expect(await favResto.getAllRestos()).toEqual([]);
  });

  it('can return all of the restaurant that have been added', async () => {
    favResto.putResto({ id: 1 });
    favResto.putResto({ id: 2 });

    expect(await favResto.getAllRestos()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurant', async () => {
    favResto.putResto({ id: 1 });
    favResto.putResto({ id: 2 });
    favResto.putResto({ id: 3 });

    await favResto.deleteResto(1);

    expect(await favResto.getAllRestos()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favResto.putResto({ id: 1 });
    favResto.putResto({ id: 2 });
    favResto.putResto({ id: 3 });

    await favResto.deleteResto(4);

    expect(await favResto.getAllRestos()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestoModel };
