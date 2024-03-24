interface patientType {
    roomNo: number;
    bedNo: number;
    drName: string;
    disease: string[];
}

interface contactType {
    cnicNo: number;
    mobileNo: number;
    eMail: string;
    bloodGroup: string;
    emergencyNo: any;
}

interface addresstype {
    streetName: string;
    houseNo: number;
    cityName: string;
    countryName: string;
    postalCode: number;
}

type usertype = {
    firstName: string;
    middleName: string;
    lastName: string;
    contactInfo: contactType;
    ispatient: boolean;
    Address: addresstype;
    petientDetail:patientType; 
}

let user: usertype = {
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
        disease: ["Flu", "Cough", "Covid","Skin", "Heart", "Strok"],
    },
}
console.log(user);
