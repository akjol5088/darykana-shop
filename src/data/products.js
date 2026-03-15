export const products = [
  {
    id: 1,
    name: "Ренни",
    description: "Ашказандагы кыжылдоону басуучу каражат.",
    longDescription: "Ренни - ашказандын кычкылдыгын тез басаңдатуучу, жалбыз даамдуу чайналма таблеткалар. Зарна жана ашказандагы оордук сезими үчүн колдонулат.",
    price: 204,
    oldPrice: 227,
    image: "https://neman.kg/images/watermarked/detailed/41/%D0%A0%D0%B5%D0%BD%D0%BD%D0%B8,_%D1%82%D0%B0%D0%B1.%D0%B6%D0%B5%D0%B2._%D1%81_%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%BB%D0%BE%D0%B2%D1%8B%D0%BC_%D0%B2%D0%BA%D1%83%D1%81%D0%BE%D0%BC_12.webp", // Ренни
    category: "Дары-дармектер",
    dosage: "Чайналма таблеткалар, 24 шт.",
    symptoms: ["ашказан оорусу", "зарна", "кыжылдоо", "ашказан"],
    isPrescriptionRequired: false,
    quantityAvailable: 10,
  },
  {
    id: 2,
    name: "Парацетамол",
    description: "Жогорку дене табын түшүрүүчү жана ооруну басуучу каражат.",
    longDescription: "Дене табын түшүрүү, башы ооруганда, сасык тумоодо колдонулат.",
    price: 35,
    oldPrice: 40,
    image: "https://neman.kg/images/watermarked/detailed/24/paracetamol-0.5-10-tabletki.webp", // Парацетамолл
    symptoms: ["ысытма", "баш оору", "тумоо", "суук тийүү", "ысык"],
    isPrescriptionRequired: false,
    quantityAvailable: 100,
    dosage: "500 мг, 10 таблетка",
    category: "Дары-дармектер"
  },
  {
    id: 3,
    name: "Амоксициллин",
    description: "Антибиотик, ар кандай бактериялык инфекцияларды дарылоодо колдонулат.",
    longDescription: "Бактерияларга каршы күчтүү каражат. Рецепт талап кылынат экенин унутпаңыз.",
    price: 150,
    oldPrice: 180,
    image: "https://neman.kg/images/watermarked/detailed/22/0.webp", // Амоксициллин
    symptoms: ["инфекция", "ангина", "өпкө сезгенүүсү", "бактерия"],
    isPrescriptionRequired: true,
    quantityAvailable: 15,
    dosage: "500 мг, 20 капсула",
    category: "Дары-дармектер"
  },
  {
    id: 4,
    name: "Нурофен",
    description: "Балдар үчүн ооруну басуучу сироп.",
    longDescription: "3 айдан жогору балдар үчүн ооруну басуу жана ысытманы түшүрүү үчүн.",
    price: 320,
    oldPrice: 350,
    image: "https://neman.kg/images/watermarked/detailed/58/rrhj04dsz9c2ocf0ab76qjv7y0pyv5ht_%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82.webp", // Нурофен
    symptoms: ["бала ысытма", "тиш оору", "бала сасык тумоо"],
    isPrescriptionRequired: false,
    quantityAvailable: 5,
    dosage: "100 мл, сироп",
    category: "Эне жана бала"
  },
  {
    id: 5,
    name: "Аспирин",
    description: "Канды суюлтуучу жана ооруну басуучу каражат.",
    longDescription: "Жүрөк-кан тамыр ооруларын алдын алуу жана ооруну басуу үчүн.",
    price: 45,
    oldPrice: 55,
    image: "https://neman.kg/images/watermarked/detailed/25/aspirin-kardio-100mg-20-tabletki.webp", // Аспирин
    symptoms: ["жүрөк", "калың кан", "баш оору"],
    isPrescriptionRequired: false,
    quantityAvailable: 50,
    dosage: "100 мг, 20 таблетка",
    category: "Дары-дармектер"
  },
  {
    id: 6,
    name: "Терафлю",
    description: "Сасык тумоо жана тумоонун белгилерин тез басуучу порошок.",
    longDescription: "Ысытма, мурун бүтүү жана жөтөл үчүн эң сонун каражат.",
    price: 85,
    oldPrice: 100,
    image: "https://neman.kg/images/watermarked/detailed/41/%D0%A2%D0%B5%D1%80%D0%B0%D1%84%D0%BB%D1%8E_%D0%BB%D0%B8%D0%BC%D0%BE%D0%BD_%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F.1png.webp", // Терафлю
    symptoms: ["мурун бүтүү", "ысытма", "жөтөл", "тумоо"],
    isPrescriptionRequired: false,
    quantityAvailable: 30,
    dosage: "20 г, пакет",
    category: "Дары-дармектер"
  },
  {
    id: 7,
    name: "Витамин C",
    description: "Иммунитетти көтөрүүчү витамин.",
    longDescription: "Кышкысын жана сасык тумоо учурунда иммунитетти көтөрүү үчүн сунушталат.",
    price: 120,
    oldPrice: 140,
    image: "https://neman.kg/images/watermarked/detailed/48/download_11zon__72_.webp", // Витамин CC
    symptoms: ["иммунитет", "алсыздык", "витамин", "суук"],
    isPrescriptionRequired: false,
    quantityAvailable: 40,
    dosage: "1000 мг, 20 шишик таблетка",
    category: "Витаминдер"
  },
  {
    id: 8,
    name: "Мезим",
    description: "Тамак сиңирүүнү жакшыртуучу фермент.",
    longDescription: "Тамак сиңирүүдөго оордук жана ашказандагы дискомфортту басат.",
    price: 380,
    oldPrice: 420,
    image: "https://neman.kg/images/watermarked/detailed/61/Mezim_10000_sd5d-sv.png", // Мезимирүү
    symptoms: ["тамак сиңирүү", "оордук", "ашказан"],
    isPrescriptionRequired: false,
    quantityAvailable: 25,
    dosage: "20 таблетка",
    category: "Дары-дармектер"
  },
  {
    id: 9,
    name: "Ксилометазолин",
    description: "Мурун бүткөндө колдонулуучу тамчылатма.",
    longDescription: "Муруннун былжыр челин сезгенүүдөн жана шишиктен бошотот.",
    price: 75,
    oldPrice: 90,
    image: "https://neman.kg/images/watermarked/detailed/36/%D0%BA%D1%81%D0%B8%D0%BB%D0%BE_1_.webp", // Ксилометазолин
    symptoms: ["мурун бүтүү", "гайморит", "дем алуу"],
    isPrescriptionRequired: false,
    quantityAvailable: 60,
    dosage: "10 мл, спрей",
    category: "Дары-дармектер"
  },
  {
    id: 10,
    name: "Левомицетин",
    description: "Көзгө тамызылуучу антибиотик.",
    longDescription: "Көздүн инфекцияларын жана конъюнктивитти дарылоо үчүн.",
    price: 60,
    oldPrice: 70,
    image: "https://neman.kg/images/watermarked/detailed/24/levomicetin-0.25-5ml-glaznye-kapli-flak-kap.webp", // Левомицетин
    symptoms: ["көз оору", "конъюнктивит", "көз инфекция"],
    isPrescriptionRequired: true,
    quantityAvailable: 15,
    dosage: "5 мл, тамчылатма",
    category: "Дары-дармектер"
  },
  {
    id: 11,
    name: "Ибупрофен",
    description: "Ооруну басуучу жана сезгенүүгө каршы.",
    longDescription: "Муундар ооруганда, тиш ооруганда жана баш ооруганда колдонулат.",
    price: 55,
    oldPrice: 65,
    image: "https://neman.kg/images/watermarked/thumbnails/270/270/detailed/59/original_e06fc09b-680c-4e91-aa0c-7f2841fbb898.webp", // Ибупрофен
    symptoms: ["тиш оору", "muun ooru", "баш оору"],
    isPrescriptionRequired: false,
    quantityAvailable: 45,
    dosage: "400 мг, 20 таблетка",
    category: "Дары-дармектер"
  },
  {
    id: 12,
    name: "Омез",
    description: "Ашказандын кычкылдуулугун төмөндөтүүчү каражат.",
    longDescription: "Гастрит жана жара ооруларын дарылоодо сунушталат.",
    price: 280,
    oldPrice: 310,
    image: "https://neman.kg/images/watermarked/detailed/23/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_%D0%BE%D1%82_2021-02-10_13-46-09.webp", // Омез
    symptoms: ["гастрит", "зарна", "ашказан"],
    isPrescriptionRequired: false,
    quantityAvailable: 20,
    dosage: "20 мг, 30 капсула",
    category: "Дары-дармектер"
  },
  {
    id: 13,
    name: "Цитрамон",
    description: "Баш ооруну басуучу классикалык каражат.",
    longDescription: "Кофеин, аспирин жана парацетамолдун айкалышы.",
    price: 25,
    oldPrice: 30,
    image: "https://neman.kg/images/watermarked/detailed/39/%D0%A6%D0%B8%D1%82%D1%80%D0%B0%D0%BC%D0%BE%D0%BD_%D0%9F_%E2%84%9610_%D0%98%D1%80%D0%B1%D0%B8%D1%82.webp", // Цитрамон
    symptoms: ["баш оору", "кан басым"],
    isPrescriptionRequired: false,
    quantityAvailable: 100,
    dosage: "10 таблетка",
    category: "Дары-дармектер"
  },
  {
    id: 14,
    name: "Пантенол",
    description: "Күйүктү жана жараатты айыктыруучу спрей.",
    longDescription: "Терини тез калыбына келтирүүчү каражат.",
    price: 450,
    oldPrice: 500,
    image: "https://neman.kg/images/watermarked/detailed/52/6372501238.webp", // Пантенол
    symptoms: ["күйүк", "жараат", "тери"],
    isPrescriptionRequired: false,
    quantityAvailable: 12,
    dosage: "130 г, спрей",
    category: "Косметика"
  },
  {
    id: 15,
    name: "Кларитин",
    description: "Аллергияга каршы каражат.",
    longDescription: "Уйкуну келтирбестен аллергиянын белгилерин басат.",
    price: 550,
    oldPrice: 620,
    image: "https://neman.kg/images/watermarked/detailed/25/loratadin-10-mg-10-tabletki.webp", // Кларитин (Лоратадин)
    symptoms: ["аллергия", "чүчкүрүү", "кычышуу"],
    isPrescriptionRequired: false,
    quantityAvailable: 18,
    dosage: "10 мг, 10 таблетка",
    category: "Дары-дармектер"
  },
  {
    id: 16,
    name: "Линекс",
    description: "Ичеги флорасын калыбына келтирүүчү пробиотик.",
    longDescription: "Антибиотик алгандан кийин ичегини иретке келтирүү үчүн.",
    price: 680,
    oldPrice: 750,
    image: "https://neman.kg/images/watermarked/detailed/61/1905ab94-be3d-4093-aa2a-cdeba64b6cf8.jpg", // Линекс
    symptoms: ["ич өтүү", "дисбактериоз", "ичеги"],
    isPrescriptionRequired: false,
    quantityAvailable: 22,
    dosage: "32 капсула",
    category: "Дары-дармектер"
  },
  {
    id: 17,
    name: "Кан басым өлчөгүч",
    description: "Электрондук тонометр.",
    longDescription: "Үй шартында кан басымын так өлчөөчү аппарат.",
    price: 2500,
    oldPrice: 3000,
    image: "https://neman.kg/images/watermarked/detailed/43/1_0tos-ko.jpg", // Тонометр
    symptoms: ["кан басым", "жүрөк", "өлчөө"],
    isPrescriptionRequired: false,
    quantityAvailable: 8,
    dosage: "1 даана",
    category: "Медициналык техника"
  },
  {
    id: 18,
    name: "Корвалол",
    description: "Тынчтандыруучу жана жүрөккө жардам берүүчү тамчылатма.",
    longDescription: "Нерв системасын тынчтандыруу жана уйкуну жакшыртуу үчүн.",
    price: 40,
    oldPrice: 50,
    image: "https://neman.kg/images/watermarked/thumbnails/275/275/detailed/46/original_0f2b2b1b-5e4d-4e9b-967b-2877e848699b.webp", // Корвалол
    symptoms: ["стресс", "уйкусуздук", "жүрөк"],
    isPrescriptionRequired: false,
    quantityAvailable: 50,
    dosage: "25 мл",
    category: "Дары-дармектер"
  },
  {
    id: 19,
    name: "Лазолван",
    description: "Жөтөлгө каршы сироп.",
    longDescription: "Какырыкты чыгаруучу and жөтөлдү жеңилдетүүчү каражат.",
    price: 360,
    oldPrice: 400,
    image: "https://neman.kg/images/watermarked/thumbnails/275/275/detailed/59/original_6b907df1-2a6d-478a-867c-9b964923e444.webp", // Лазолван
    symptoms: ["жөтөл", "какырык", "бронхит"],
    isPrescriptionRequired: false,
    quantityAvailable: 25,
    dosage: "100 мл, сироп",
    category: "Дары-дармектер"
  },
  {
    id: 20,
    name: "Магне B6",
    description: "Стресске каршы витамин комплекси.",
    longDescription: "Нерв системасын колдоо жана чарчоону басуу үчүн.",
    price: 850,
    oldPrice: 950,
    image: "https://neman.kg/images/watermarked/thumbnails/275/275/detailed/46/original_f930e16b-8f2c-4e8c-8f92-5e4c8e76f92c.webp", // Магне B6
    symptoms: ["стресс", "чарчоо", "судороги"],
    isPrescriptionRequired: false,
    quantityAvailable: 15,
    dosage: "50 таблетка",
    category: "Витаминдер"
  },
  {
    id: 21,
    name: "Нитроглицерин",
    description: "Жүрөк оорусунда тез жардам каражаты.",
    longDescription: "Стенокардия учурунда тил астына коюлуучу таблеткалар.",
    price: 120,
    oldPrice: 150,
    image: "https://neman.kg/images/watermarked/thumbnails/275/275/detailed/46/original_99be4713-333e-4363-8f69-d596a2977759.webp", // Нитроглицерин
    symptoms: ["жүрөк оору", "стенокардия"],
    isPrescriptionRequired: true,
    quantityAvailable: 10,
    dosage: "0.5 мг, 40 таблетка",
    category: "Дары-дармектер"
  },
  {
    id: 22,
    name: "Кетонал",
    description: "Күчтүү ооруну басуучу гель.",
    longDescription: "Бел, муун жана булчуң ооруларында колдонулат.",
    price: 420,
    oldPrice: 480,
    image: "https://neman.kg/images/watermarked/thumbnails/275/275/detailed/44/original_908f0290-7d7b-4375-9e66-1cda3f6ce4fb.webp", // Кетонал
    symptoms: ["муун оору", "бел оору", "булчуң"],
    isPrescriptionRequired: false,
    quantityAvailable: 30,
    dosage: "50 г, гель",
    category: "Дары-дармектер"
  },
  {
    id: 23,
    name: "Но-шпа",
    description: "Спазмды басуучу каражат.",
    longDescription: "Ич ооруганда жана спазм болгондо эң натыйжалуу каражат.",
    price: 480,
    oldPrice: 530,
    image: "https://neman.kg/images/watermarked/thumbnails/275/275/detailed/45/original_2563f68d-8a58-410e-9270-22c7a02e6047.webp", // Но-шпа
    symptoms: ["ич оору", "спазм", "бөйрөк"],
    isPrescriptionRequired: false,
    quantityAvailable: 40,
    dosage: "40 мг, 24 таблетка",
    category: "Дары-дармектер"
  },
  {
    id: 24,
    name: "Детралекс",
    description: "Веналарды бекемдөөчү каражат.",
    longDescription: "Варикоз жана геморройду дарылоодо колдонулат.",
    price: 1800,
    oldPrice: 2100,
    image: "https://neman.kg/images/watermarked/thumbnails/275/275/detailed/46/original_435a2dd7-2b7e-46ff-a579-dd9e2d76f874.webp", // Детралекс
    symptoms: ["варикоз", "бут шишиги", "геморрой"],
    isPrescriptionRequired: false,
    quantityAvailable: 10,
    dosage: "1000 мг, 30 таблетка",
    category: "Дары-дармектер"
  },
  {
    id: 25,
    name: "Глицин",
    description: "Мээнин иштешин жакшыртуучу каражат.",
    longDescription: "Эс тутумду жакшыртуу жана уйкуну жөнгө салуу үчүн.",
    price: 90,
    oldPrice: 110,
    image: "https://neman.kg/images/watermarked/thumbnails/275/275/detailed/44/original_199a224a-71dd-44de-9e45-d4fc3f1d2b78.webp", // Глицин
    symptoms: ["эс тутум", "уйкусуздук", "мээ"],
    isPrescriptionRequired: false,
    quantityAvailable: 60,
    dosage: "50 таблетка",
    category: "Дары-дармектер"
  },
  {
    id: 26,
    name: "Супрастин",
    description: "Аллергияга каршы тез таасир этүүчү каражат.",
    longDescription: "Курч аллергиялык реакцияларда колдонулат.",
    price: 210,
    oldPrice: 240,
    image: "https://neman.kg/images/watermarked/detailed/25/suprastin_bu6a-m7.webp", // Супрастин
    symptoms: ["аллергия", "өрткөн", "шишик"],
    isPrescriptionRequired: false,
    quantityAvailable: 35,
    dosage: "25 мг, 20 таблетка",
    category: "Дары-дармектер"
  },
  {
    id: 27,
    name: "Канефрон",
    description: "Бөйрөк жана табарсык ооруларына каршы чөп дары.",
    longDescription: "Цистит жана бөйрөк сезгенүүсүн дарылоо үчүн.",
    price: 950,
    oldPrice: 1050,
    image: "https://neman.kg/images/watermarked/detailed/24/kanefron-n-60-drazhe.webp", // Канефрон
    symptoms: ["цистит", "бөйрөк оору", "табарсык"],
    isPrescriptionRequired: false,
    quantityAvailable: 15,
    dosage: "60 таблетка",
    category: "Дары-дармектер"
  },
  {
    id: 28,
    name: "Мукалтин",
    description: "Чөптөн жасалган жөтөлгө каршы таблеткалар.",
    longDescription: "Какырыкты жумшартуучу табигый каражат.",
    price: 30,
    oldPrice: 40,
    image: "https://neman.kg/images/watermarked/detailed/25/mukaltin-50mg-10-tabletki.webp", // Мукалтин
    symptoms: ["жөтөл", "какырык"],
    isPrescriptionRequired: false,
    quantityAvailable: 100,
    dosage: "10 таблетка",
    category: "Дары-дармектер"
  },
  {
    id: 29,
    name: "Лоратадин",
    description: "Антигистаминдик арзан каражат.",
    longDescription: "Аллергиялык ринит жана тери кычышуусун басат.",
    price: 65,
    oldPrice: 80,
    image: "https://neman.kg/images/watermarked/detailed/25/loratadin-10-mg-10-tabletki.webp", // Лоратадин
    symptoms: ["аллергия", "мурун бүтүү"],
    isPrescriptionRequired: false,
    quantityAvailable: 50,
    dosage: "10 мг, 10 таблетка",
    category: "Дары-дармектер"
  },
  {
    id: 30,
    name: "Диклофенак",
    description: "Сезгенүүгө каршы күчтүү дары.",
    longDescription: "Муун жана омуртка ооруларында ооруну басат.",
    price: 140,
    oldPrice: 170,
    image: "https://neman.kg/images/watermarked/detailed/44/download_11zon__7_.webp", // Диклофенак
    symptoms: ["муун сезгенүүсү", "бел оору"],
    isPrescriptionRequired: false,
    quantityAvailable: 40,
    dosage: "100 мг, 20 таблетка",
    category: "Дары-дармектер"
  },
  {
    id: 31,
    name: "Гексорал",
    description: "Тамак оорусуна каршы аэрозоль.",
    longDescription: "Тамак сезгенүүсүндө антисептикалык таасир берет.",
    price: 480,
    oldPrice: 530,
    image: "https://neman.kg/images/watermarked/detailed/24/%D0%B3%D0%B5%D0%BA%D1%81%D0%BE%D1%80%D0%B0%D0%BB-%D1%82%D0%B0%D0%B1%D1%81.webp", // Гексорал
    symptoms: ["тамак оору", "ангина"],
    isPrescriptionRequired: false,
    quantityAvailable: 18,
    dosage: "40 мл, аэрозоль",
    category: "Дары-дармектер"
  },
  {
    id: 32,
    name: "Креон",
    description: "Тамак сиңирүүнү жакшыртуучу каражат.",
    longDescription: "Уйку безинин иштеши начарлаганда колдонулат.",
    price: 1200,
    oldPrice: 1350,
    image: "https://neman.kg/images/watermarked/detailed/44/%D0%9A%D1%80%D0%B5%D0%BE%D0%BD-10000_box_KG.webp", // Креон
    symptoms: ["панкреатит", "тамак сиңирүү"],
    isPrescriptionRequired: false,
    quantityAvailable: 15,
    dosage: "10000 ED, 20 капсула",
    category: "Дары-дармектер"
  },
  {
    id: 33,
    name: "Алфавит",
    description: "Витамин-минералдык комплекс.",
    longDescription: "Организмдин жалпы абалын жакшыртуу үчүн.",
    price: 780,
    oldPrice: 850,
    image: "https://neman.kg/images/watermarked/detailed/34/orig.webp", // Алфавит
    symptoms: ["авитаминоз", "иммунитет"],
    isPrescriptionRequired: false,
    quantityAvailable: 20,
    dosage: "60 таблетка",
    category: "Витаминдер"
  },
  {
    id: 34,
    name: "Бепантен",
    description: "Терини калыбына келтирүүчү мазь.",
    longDescription: "Жарааттарды жана теринин кургап кетүүсүн дарылоо үчүн.",
    price: 520,
    oldPrice: 580,
    image: "https://neman.kg/images/watermarked/detailed/41/%D0%91%D0%B5%D0%BF%D0%B0%D0%BD%D1%82%D0%B5%D0%BD_%D0%BC%D0%B0%D0%B7%D1%8C_30%D0%B3.webp", // Бепантен
    symptoms: ["тери кыжылдоо", "бөбөк", "эне"],
    isPrescriptionRequired: false,
    quantityAvailable: 25,
    dosage: "30 г, мазь",
    category: "Эне жана бала"
  },
  {
    id: 35,
    name: "Отинум",
    description: "Кулак оорусуна каршы тамчылатма.",
    longDescription: "Отит учурунда ооруну басуучу жана сезгенүүгө каршы каражат.",
    price: 340,
    oldPrice: 380,
    image: "https://neman.kg/images/watermarked/detailed/22/otinum.webp", // Отинум
    symptoms: ["кулак оору", "отит"],
    isPrescriptionRequired: false,
    quantityAvailable: 12,
    dosage: "10 мл",
    category: "Дары-дармектер"
  },
  {
    id: 36,
    name: "Мирамистин",
    description: "Универсалдуу антисептик.",
    longDescription: "Микробдорго жана вирустарга каршы кеңири таасир этүүчү каражат.",
    price: 450,
    oldPrice: 500,
    image: "https://neman.kg/images/watermarked/detailed/42/%D0%BC%D0%B8%D1%80%D0%BC.webp", // Мирамистин
    symptoms: ["инфекция", "тамак оору", "жараат"],
    isPrescriptionRequired: false,
    quantityAvailable: 20,
    dosage: "150 мл",
    category: "Дары-дармектер"
  },
  {
    id: 37,
    name: "Нимесил",
    description: "Ооруну басуучу порошок.",
    longDescription: "Катуу ооруларда жана дене табы көтөрүлгөндө колдонулат.",
    price: 45,
    oldPrice: 55,
    image: "https://neman.kg/images/watermarked/detailed/24/nimesil-2g-30-pak.webp", // Нимесил
    symptoms: ["тиш оору", "айыз оору", "ысытма"],
    isPrescriptionRequired: false,
    quantityAvailable: 100,
    dosage: "1 пакет",
    category: "Дары-дармектер"
  },
  {
    id: 38,
    name: "Эссенциале Форте",
    description: "Боорду коргоочу каражат.",
    longDescription: "Боордун клеткаларын калыбына келтирүү үчүн.",
    price: 980,
    oldPrice: 1100,
    image: "https://neman.kg/images/watermarked/detailed/22/essensial-1.webp", // Эссенциале Форте
    symptoms: ["боор оору", "алкоголь"],
    isPrescriptionRequired: false,
    quantityAvailable: 10,
    dosage: "30 капсула",
    category: "Дары-дармектер"
  },
  {
    id: 39,
    name: "Циклоферон",
    description: "Иммунитетти көтөрүүчү жана вируска каршы каражат.",
    longDescription: "Грипп жана сасык тумоону алдын алуу үчүн колдонулат.",
    price: 520,
    oldPrice: 580,
    image: "https://neman.kg/images/watermarked/detailed/49/%D1%86%D0%B8%D0%BA%D0%BB%D0%BE%D1%84%D0%B5%D1%80%D0%BE%D0%BD-PhotoRoom.png-PhotoRoom.webp", // Циклоферон
    symptoms: ["герпес", "вирус", "иммунитет"],
    isPrescriptionRequired: false,
    quantityAvailable: 15,
    dosage: "10 таблетка",
    category: "Дары-дармектер"
  },
  {
    id: 40,
    name: "Тест тилкелери",
    description: "Глюкометр үчүн тест тилкелери.",
    longDescription: "Кандагы канттын деңгээлин өлчөө үчүн колдонулат.",
    price: 1100,
    oldPrice: 1250,
    image: "https://neman.kg/images/watermarked/detailed/39/U52232cacf9d4418f86870cc6cb40e479L.webp", // Тест тилкелери
    symptoms: ["кант", "диабет"],
    isPrescriptionRequired: false,
    quantityAvailable: 5,
    dosage: "50 даана",
    category: "Медициналык техника"
  },
  {
    id: 41,
    name: "Ингалятор",
    description: "Компрессордук небулайзер.",
    longDescription: "Дем алуу жолдорун дарылоочу аппарат.",
    price: 2800,
    oldPrice: 3200,
    image: "https://neman.kg/images/watermarked/thumbnails/270/270/detailed/44/1%D0%B0%D0%B0_9clo-re.webp", // Ингалятор
    symptoms: ["жөтөл", "астма", "дем алуу"],
    isPrescriptionRequired: false,
    quantityAvailable: 4,
    dosage: "1 даана",
    category: "Медициналык техника"
  },
  {
    id: 42,
    name: "Д3 Витамини",
    description: "Д3 витамининин тамчылатмасы.",
    longDescription: "Сөөктөрдү бекемдөө жана иммунитетти колдоо үчүн.",
    price: 450,
    oldPrice: 500,
    image: "https://neman.kg/images/watermarked/detailed/40/%D0%92%D0%B8%D1%82%D0%B0%D0%BC%D0%B8%D0%BD_%D0%943.webp", // Д3 Витамини
    symptoms: ["сөөк", "иммунитет", "чарчоо"],
    isPrescriptionRequired: false,
    quantityAvailable: 20,
    dosage: "60 капсула",
    category: "Витаминдер"
  },
  {
    id: 43,
    name: "Пустырник",
    description: "Тынчтандыруучу чөп дары.",
    longDescription: "Асабийлик жана жүрөк катуу соккондо жардам берет.",
    price: 80,
    oldPrice: 100,
    image: "https://neman.kg/images/watermarked/detailed/44/pustyrnik-forte-evalar-tab-20.webp", // Пустырник
    symptoms: ["стресс", "асабийлик"],
    isPrescriptionRequired: false,
    quantityAvailable: 40,
    dosage: "50 таблетка",
    category: "Дары-дармектер"
  },
  {
    id: 44,
    name: "Энтеросгель",
    description: "Уулануудагы сорбент каражат.",
    longDescription: "Организмден уулуу заттарды чыгаруучу паста.",
    price: 850,
    oldPrice: 950,
    image: "https://neman.kg/images/watermarked/detailed/23/enterosgel.webp", // Энтеросгель
    symptoms: ["уулануу", "токсин", "аллергия"],
    isPrescriptionRequired: false,
    quantityAvailable: 15,
    dosage: "225 г, паста",
    category: "Дары-дармектер"
  },
  {
    id: 45,
    name: "Кардиомагнил",
    description: "Жүрөктү коргоочу таблеткалар.",
    longDescription: "Инфаркттын алдын алуу жана канды суюлтуу үчүн.",
    price: 380,
    oldPrice: 420,
    image: "https://neman.kg/images/watermarked/detailed/24/CN-Cardiomagnyl-150mg-100Tab_KYR_F1_V04_1113.webp", // Кардиомагнил
    symptoms: ["тромб", "жүрөк", "кан суюлтуу"],
    isPrescriptionRequired: false,
    quantityAvailable: 25,
    dosage: "100 даана",
    category: "Дары-дармектер"
  },
  {
    id: 46,
    name: "Вишневский мази",
    description: "Жараатты айыктыруучу мазь.",
    longDescription: "Сезгенүүнү соруп алуучу классикалык каражат.",
    price: 80,
    oldPrice: 100,
    image: "https://neman.kg/images/watermarked/detailed/50/Frame_1_23-removebg-preview_5fv4-ci.webp", // Вишневский мази
    symptoms: ["ириң", "сепүү", "жараат"],
    isPrescriptionRequired: false,
    quantityAvailable: 30,
    dosage: "30 г",
    category: "Дары-дармектер"
  },
  {
    id: 47,
    name: "Паранит",
    description: "Битке каршы спрей.",
    longDescription: "Битти жана сиркени жок кылуучу эффективдүү каражат.",
    price: 750,
    oldPrice: 850,
    image: "https://neman.kg/images/watermarked/thumbnails/270/270/detailed/45/higienika-sredstvo-pedikulicidnoe-60-ml-PhotoRoom.png-PhotoRoom.webp", // Паранит (Хигиеника)
    symptoms: ["бит", "баш кычышуу"],
    isPrescriptionRequired: false,
    quantityAvailable: 10,
    dosage: "100 мл, спрей",
    category: "Дары-дармектер"
  },
  {
    id: 48,
    name: "Ортопедиялык жаздык",
    description: "Моюнду колдоочу жаздык.",
    longDescription: "Уйкуну жакшыртуучу жана моюн оорусун алдын алуу үчүн.",
    price: 3500,
    oldPrice: 4200,
    image: "https://neman.kg/images/watermarked/detailed/49/jkbjbkn-removebg-preview.png", // Ортопедиялык жаздык
    symptoms: ["моюн оору", "уйкусуздук"],
    isPrescriptionRequired: false,
    quantityAvailable: 5,
    dosage: "1 даана",
    category: "Ортопедия"
  },
  {
    id: 49,
    name: "Эластикалык бинт",
    description: "Муундарды бинттөө үчүн.",
    longDescription: "Травмаларда жана варикоздо колдонулат.",
    price: 250,
    oldPrice: 300,
    image: "https://neman.kg/images/watermarked/thumbnails/270/270/detailed/31/806.webp", // Эластикалык бинт
    symptoms: ["травма", "чоюлуу", "фиксация"],
    isPrescriptionRequired: false,
    quantityAvailable: 100,
    dosage: "3 м x 8 см",
    category: "Ортопедия"
  },
  {
    id: 50,
    name: "Ортопедиялык стелькалар",
    description: "Бут кийимдин ичине салуучу стелькалар.",
    longDescription: "Жалпак тамандуулукту алдын алуу үчүн.",
    price: 1200,
    oldPrice: 1500,
    image: "https://neman.kg/images/watermarked/detailed/30/stelki-ortopedicheskie-ot-ploskostopii-probkovye-sl506-r-42.webp", // Ортопедиялык стелькалар
    symptoms: ["жалпак таман", "бут чарчоо"],
    isPrescriptionRequired: false,
    quantityAvailable: 15,
    dosage: "1 жуп",
    category: "Ортопедия"
  },
  {
    id: 51,
    name: "Мелаксен",
    description: "Уйкуну жакшыртуучу каражат.",
    longDescription: "Уйкунун циклин жөнгө салуучу таблеткалар.",
    price: 850,
    oldPrice: 950,
    image: "https://neman.kg/images/watermarked/detailed/49/%D0%BC%D0%B5%D0%BB%D0%B0%D0%BA%D1%81%D0%B5%D0%BD-removebg-preview.webp", // Мелаксен
    symptoms: ["уйкусуздук", "убакыт алгашуу"],
    isPrescriptionRequired: false,
    quantityAvailable: 10,
    dosage: "10 таблетка",
    category: "Дары-дармектер"
  },
  {
    id: 52,
    name: "Балдар памперси (Pampers)",
    description: "Бөбөктөр үчүн жумшак памперстер.",
    longDescription: "Терини кургак жана таза сактоочу гигиеналык каражат.",
    price: 1800,
    oldPrice: 2000,
    image: "https://neman.kg/images/watermarked/detailed/33/pampers-podguzniki-active-baby-dry-extra-large.webp", // Балдар памперси
    symptoms: ["бөбөк", "гигиена"],
    isPrescriptionRequired: false,
    quantityAvailable: 20,
    dosage: "50 даана",
    category: "Эне жана бала"
  }
];
