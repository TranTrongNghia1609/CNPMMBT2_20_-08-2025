"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        email: "admin@example.com",
        password: "admin123",
        firstName: "Admin",
        lastName: "User",
        address: "Hanoi",
        phoneNumber: "0123456789",
        gender: true,
        image: "",
        roleId: "1",
        positionId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "doctor@example.com",
        password: "doctor123",
        firstName: "Doctor",
        lastName: "Strange",
        address: "Saigon",
        phoneNumber: "0987654321",
        gender: false,
        image: "",
        roleId: "2",
        positionId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "patient@example.com",
        password: "patient123",
        firstName: "Patient",
        lastName: "Smith",
        address: "Danang",
        phoneNumber: "0112233445",
        gender: true,
        image: "",
        roleId: "3",
        positionId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};