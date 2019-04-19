module.exports = {
  getAllHouses: async (req, res) => {
    const db = req.app.get("db");
    const houses = await db.get_all_houses().catch(err => console.log(err));
    res.status(200).json(houses);
  },
  addHouse: async (req, res) => {
    const db = req.app.get("db");
    const {
      name,
      address,
      city,
      state,
      zip,
      img_url,
      mortgage,
      rent
    } = req.body;
    const house = await db
      .add_house([name, address, city, state, zip, img_url, mortgage, rent])
      .catch(err => console.log(err));
    res.sendStatus(200);
  },
  deleteHouse: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    console.log(id);
    db.delete_house(id)
      .then(() => res.sendStatus(200))
      .catch(err => console.log(err));
  },
  updateHouseMortgage: async (req, res) => {
    const db = req.app.get("db");
    const { params, query } = req;

    const mortgage = db
      .edit_house_mortgage([params.id, query.mortgage])
      .catch(err => console.log(err));

    res.sendStatus(200);
  }
};
