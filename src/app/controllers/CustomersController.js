/* eslint-disable class-methods-use-this */
const customers = [
  { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br" },
  { id: 2, name: "Google", site: "http://google.com" },
  { id: 3, name: "UOL", site: "http://uol.com.br" },
];

class CustomersController {
  index(req, res) {
    return res.json(customers);
  }

  show(req, res) {
    const id = parseInt(req.params.id);

    const customer = customers.find((item) => item.id === id);

    const status = customer ? 200 : 404;

    return res.status(status).json(customer);
  }

  create(req, res) {
    const { name, site } = req.body;

    const id = customers[customers.length - 1].id + 1;
    const newCustomer = {
      id,
      name,
      site,
    };

    customers.push(newCustomer);

    return res
      .status(201)
      .json({ message: "New customer created!", newCustomer });
  }

  update(req, res) {
    const id = parseInt(req.params.id);

    const { name, site } = req.body;

    const newCustomers = customers.map((item) =>
      item.id === id ? { ...item, name, site } : item,
    );

    return res.status(200).json({ newCustomers });
  }

  destroy(req, res) {
    const id = parseInt(req.params.id);

    const newCustomers = customers.filter((item) =>
      item.id === id ? null : item,
    );

    return res.status(200).json(newCustomers);
  }
}

export default new CustomersController();
