class Animal:
    def __init__(self, name, color):
        self.name = name
        self.color = color
    @classmethod
    def get_list(cls):
        animals = [
            cls("Jirafa", "Naranja"),
            cls("Cebra", "blanco"),
            cls("Xenomorfo", "negro"),
            cls("Elefante", "gris"),
            cls("Tigre", "naranja con negro"),
            cls("Panda", "blanco con negro"),
            cls("León", "amarillo"),
            cls("Serpiente", "verde"),
            cls("Cocodrilo", "verde oscuro"),
            cls("Pingüino", "blanco y azul"),
            cls("Delfín", "azul claro"),
            cls("Tortuga", "marrón"),
            cls("Camaleón", "multicolor"),
            cls("Lobo", "gris oscuro")
        ]
        return animals