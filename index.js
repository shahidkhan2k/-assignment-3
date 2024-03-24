var user = {
    firstName: "Syed",
    middleName: "Osama",
    lastName: "Hamid",
    contactInfo: {
        cnicNo: 4220177861163,
        mobileNo: +923332248800,
        eMail: "shahidkhan2k@gmail.com",
        bloodGroup: "B+",
        emergencyNo: +923332355955,
    },
    ispatient: true,
    Address: {
        streetName: "Bismillah Market",
        houseNo: 42,
        cityName: "Karachi, Sindh",
        countryName: "Pakistan",
        postalCode: 75160,
    },
    petientDetail: {
        roomNo: 302,
        bedNo: 14,
        drName: "Dr.Anum Khan",
        disease: ["Flu", "Cough", "Covid", "Skin", "Heart", "Strok"],
    },
};
console.log(user);
console.log(user.petientDetail.disease[3]);
