const products = [
    {
      id: 1,
      title: "Zapatillas Deportivas Corredor Veloz",
      price: 89.99,
      stock: 50,
      category: "Running",
      description: "Ideales para corredores que buscan ligereza y amortiguación.",
      imageUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/be8e415f3b93413c8cfd0eb2a0e7263c_9366/Zapatilla_Runfalcon_5_Running_Blanco_IH7757_HM3_hover.jpg" // Ejemplo
    },
    {
      id: 2,
      title: "Zapatillas Urbanas StreetStyle",
      price: 69.99,
      stock: 30,
      category: "Urbanas",
      description: "Estilo moderno y comodidad para el día a día.",
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1f4b2c79-d877-4114-bfa5-2ebb0d804f8e/JORDAN+MVP.png" // Ejemplo
    },
    {
      id: 3,
      title: "Zapatillas de Baloncesto Air Max",
      price: 129.99,
      stock: 20,
      category: "Baloncesto",
      description: "Máximo soporte y rendimiento en la cancha.",
      imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/93fc4ff3-039a-47e5-8938-aeb743b2c00d/W+AIR+MAX+DN+ISA.png" // Ejemplo
    },
    {
      id: 4,
      title: "Zapatillas de Senderismo Montaña Explorer",
      price: 99.99,
      stock: 40,
      category: "Senderismo",
      description: "Agarre y protección para terrenos difíciles.",
      imageUrl: "https://assets.thenorthface.eu/images/t_img/f_auto,h_462,w_462/e_sharpen:60/dpr_2.0/v1725008907/NF0A83NBMN8-HERO/Mens-Verto-GORETEX-Alpine-Mid-Boots.jpg" // Ejemplo
    },
      {
      id: 5,
      title: "Zapatillas Clásicas Lona Vintage",
      price: 59.99,
      stock: 60,
      category: "Clásicas",
      description: "Un clásico reinventado para un look casual.",
      imageUrl: "https://cdn.napali.app/static/DC/default/category-assets/experiences/2020/ups/3ups/3u_titles_below/img/backgrounds/emea/dc-3ups-title-below-01.jpg" // Ejemplo
    },
    {
      id: 6,
      title: "Zapatillas de Entrenamiento Crossfit Power",
      price: 109.99,
      stock: 25,
      category: "Crossfit",
      description: "Estabilidad y resistencia para entrenamientos intensos.",
      imageUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/03e5a4c6d7084921bdf6ff79adb7cdcf_9366/Zapatilla_Dropset_3_Rosa_JI3902_HM3_hover.jpg" // Ejemplo
    },
    {
      id: 7,
      title: "Zapatillas de Skateboarding Pro Rider",
      price: 79.99,
      stock: 35,
      category: "Skateboarding",
      description: "Agarre y durabilidad para trucos profesionales.",
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c466d0c8-4178-46a2-a166-d82644c853ec/NIKE+SB+MALOR.png" // Ejemplo
    },
    {
      id: 8,
      title: "Zapatillas Deportivas Ligero Fly",
      price: 74.99,
      stock: 45,
      category: "Running",
      description: "Sensación de ligereza y libertad en cada paso.",
      imageUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c1ce1ad09cec4c8399308c8822551c77_9366/Ultraboost_5_GTX_Negro_JI1384_01_00_standard.jpg" // Ejemplo
    },
      {
      id: 9,
      title: "Zapatillas Casuales Urban Flow",
      price: 64.99,
      stock: 55,
      category: "Urbanas",
      description: "Comodidad y estilo para el ritmo de la ciudad.",
      imageUrl: "https://www.converse.com/dw/image/v2/BJJF_PRD/on/demandware.static/-/Sites-cnv-master-catalog-we/default/dwe7073c24/images/a_107/A04293C_A_107X1.jpg?sw=964" // Ejemplo
    },
    {
      id: 10,
      title: "Zapatillas de Baloncesto Retro Jump",
      price: 119.99,
      stock: 15,
      category: "Baloncesto",
      description: "Estilo retro con tecnología moderna para el juego.",
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f0ce8760-e30d-4f33-aa8c-7964504ab0b7/JORDAN+HEIR+SERIES.png" // Ejemplo
    },
    {
      id: 11,
      title: "Botas de Montaña Impermeables Trek",
      price: 104.99,
      stock: 30,
      category: "Senderismo",
      description: "Protección total contra el agua y gran agarre.",
      imageUrl: "https://media.bluestonepim.com/eb200337-aa76-4ae2-a7e3-75cfa1116b37/18158f2a-d721-4f41-8101-4ee2c1a78fea/MjcvlIwXIaLqD5NSfq833bH09/wSzt0cZnxfPr3VRqLzuIx0Kg9.png?w=560&h=600&f=png&targetFileName=396407_101.png" // Ejemplo
    },
      {
      id: 12,
      title: "Zapatillas Deportivas Retro Run",
      price: 84.99,
      stock: 40,
      category: "Running",
      description: "Estilo retro con la comodidad actual.",
      imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/190a0fe3-46dc-4d5e-a6f4-4588bfb9756f/W+NIKE+DOWNSHIFTER+13.png" // Ejemplo
    },
    {
      id: 13,
      title: "Zapatillas Urbanas Street Beat",
      price: 74.99,
      stock: 20,
      category: "Urbanas",
      description: "Un estilo moderno y atrevido para la ciudad.",
      imageUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/397377/29/sv01/fnd/EEA/fmt/png/Zapatillas-de-ante-Road-Rider" // Ejemplo
    },
      {
      id: 14,
      title: "Zapatillas de Entrenamiento Gym Fit",
      price: 94.99,
      stock: 35,
      category: "Entrenamiento",
      description: "Versatilidad y soporte para todo tipo de entrenamiento.",
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b5bc078e-261a-4a7a-8819-6f38691f1745/JORDAN+LUKA+3.png" // Ejemplo
    },
    {
      id: 15,
      title: "Zapatillas para Caminar Confort Walk",
      price: 54.99,
      stock: 65,
      category: "Casual",
      description: "Máxima comodidad para largas caminatas.",
      imageUrl: "https://cdn.napali.app/static/DC/default/category-assets/experiences/2020/ups/3ups/3u_titles_below/img/backgrounds/emea/dc-3ups-title-below-09-construc.jpg" // Ejemplo
    }
  ];
  
export default products