const { errorMsg } = require("../../_utils/messages");
const { User, Customer, Role } = require("../../models");

const models = require("../../models/index");

console.log(models.sequelize.models);

module.exports = async (req, res) => {
  //   let { page } = req.query;

  //   page = +page;
  //   if (!page || page < 0) page = 1;

  //   const LIMIT = 6;
  //   const userCount = await User.count();
  //   const maxPages = Math.ceil(userCount / LIMIT);

  //   if (page > maxPages) {
  //     return res.status(404).json({
  //       status: "Error",
  //       message: errorMsg.pagination.SURPASS,
  //     });
  //   }

  try {
    const users = await User.findAll({
      //   limit: LIMIT,
      //   offset: (page - 1) * LIMIT,
      //   attributes: [
      //     "id",
      //     ["user_first_name", "name"],
      //     ["user_last_name", "last_name"],
      //   ],
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },

      include: [
        {
          model: Role,
          as: "role",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        // {
        //   model: Customer,
        //   as: "customer",
        //   attributes: { exclude: ["createdAt", "updatedAt"] },
        // },
      ],
    });
    res.status(200).json({
      //   info: {
      //     count: userCount,
      //     page,
      //     pages: maxPages,
      //   },
      results: users,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
