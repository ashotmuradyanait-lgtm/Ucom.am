const dataBase = {
  cards: [
    {
      id: 1,
      title: "Level Up+ 3000",
      description: "Ամսական ինտերնետ փաթեթ 3000 դրամով",
      price: 3000,
      currency: "AMD",
      isActive: true,
      category: "Internet",
      image: "/images/levelup3000.png",
      icon: "fa-solid fa-wifi",
      features: [
        "Անսահմանափակ ինտերնետ",
        "5G աջակցություն",
        "Անվճար SIM քարտ"
      ]
    },
    {
      id: 2,
      title: "Level Up+ 5000",
      description: "Ավելի արագ և մեծ ծավալով փաթեթ",
      price: 5000,
      currency: "AMD",
      isActive: true,
      category: "Internet",
      image: "/images/levelup5000.png",
      icon: "fa-solid fa-bolt",
      features: [
        "Ավելի բարձր արագություն",
        "Priority support",
        "Անսահմանափակ զանգեր"
      ]
    },
    {
      id: 3,
      title: "Business Pro",
      description: "Բիզնես լուծում մեծ թիմերի համար",
      price: 12000,
      currency: "AMD",
      isActive: false,
      category: "Business",
      image: "/images/businesspro.png",
      icon: "fa-solid fa-briefcase",
      features: [
        "Մինչև 10 աշխատակից",
        "Dedicated manager",
        "Cloud storage"
      ]
    }
  ]
};

export default dataBase;
