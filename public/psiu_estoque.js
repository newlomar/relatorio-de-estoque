const form = document.querySelector('form');

const produtos = {
    frios: {
        'Queijo Prato': 1,
        'Queijo Minas': 1,
        'Queijo Ralado': 1,
        'Queijo Provolone': 1,
        'Queijo Catupiry': 1,
        'Queijo Cheddar': 1,
        'Presunto': 1,
        'Blanquet de Peru': 1,
        'Ovo codorna': 1,
        'Ameixas': 1
    },
    condimentos: {
        'Sal Grosso': 1,
        'Ovos': 1,
        'Batata Palha': 1,
        'Billy Jack': 1,
        'Sachê Ketchup': 1,
        'Sachê Mostarda': 1,
        'Sachê Maionese': 1,
        'Sachê Palito': 1,
        'Sachê Sal': 1,
        'Sachê Acúçar': 1,
        'Ketchup Cepera': 1,
        'Maionese': 1,
        'Mostarda': 1,
        'Barbecue': 1,
        'Ketchup Suit': 1,
        'Extrato de Tomate': 1,
        'Azeite Salada': 1,
        'Óleo Composto': 1,
        'Alho e sal': 1,
        'Alho triturado': 1,
        'Alho Frito': 1,
        'Milho': 1,
        'Ervilha': 1,
        'Passas': 1,
        'Orégano': 1,
        'Canela': 1,
        'Champignon': 1,
        'Azeitonas Fatiadas': 1,
        'Manteiga Garrafa': 1,
        'Açúcar': 1,
        'Leite': 1,
        'Tomate Seco': 1
    },
    descartaveis: {
        'Guardanapo': 1,
        'Guardanapo Estojo': 1,
        'Papel Alumínio': 1,
        'Colher Descartável': 1,
        'Canudo': 1,
        'Canudo Grosso': 1,
        'Bolsa Plástica': 1,
        'Saco de lixo 100': 1,
        'PVC': 1,
        'Luva Descartável': 1,
        'Touca': 1,
        'Copo 100 ML': 1,
        'Copo 200 ML': 1,
        'Copo 300 ML': 1,
        'Copo 500 ML': 1,
        'Copo 700 ML': 1,
        'Quentinha Viagem': 1,
        'Hamburgueria': 1,
        'Saco Cachorro Quente': 1,
        'Bobina Plástica': 1
    },
    bebidas: {
        'Água': 1,
        'Água c/ Gás': 1,
        'H20': 1,
        'Guaraná': 1,
        'Guaraná Zero': 1,
        'Coca-cola': 1,
        'Coca zero': 1,
        'Água tônica': 1,
        'Sprite': 1,
        'Fanta Laranja': 1,
        'Fanta Uva': 1,
        'Vinho': 1,
        'Antártica': 1,
        'Brahma': 1,
        'Guaraviton': 1,
        'Guaravita': 1,
        'Mate Natural': 1,
        'Mate Limão': 1
    },
    hortifruti: {
        'Alface': 1,
        'Tomate': 1,
        'Pimentão': 1,
        'Cebola': 1,
        'Alho Fruta': 1,
        'Salsa': 1,
        'Coentro': 1,
        'Hortelã': 1,
        'Laranja': 1,
        'Banana': 1,
        'Limão': 1,
        'Gelo': 1,
        'Água Garrafão': 1,
        'Abacaxi Fruta': 1
    },
    acai: {
        'Fresk': 1,
        'Granola': 1,
        'Paçoca': 1,
        'Amendoim': 1,
        'Jujuba': 1,
        'Flocos Arroz': 1,
        'Granulado Preto': 1,
        'Granulado Colorido': 1,
        'Amendoim Colorido': 1,
        'Aveia': 1,
        'Rolinho Wafer': 1,
        'Calda Caramelo': 1,
        'Calda Chocolate': 1,
        'Calda Uva': 1,
        'Calda Menta': 1,
        'Calda Leita Condensado': 1
    },
    polpa_de_frutas: {
        'Manga': 1,
        'Maracujá': 1,
        'Caju': 1,
        'Graviola': 1,
        'Cupuaçu': 1,
        'Acerola': 1,
        'Abacaxi': 1,
        'Abacaxi com Hortelã': 1,
        'Morango': 1
    },
};