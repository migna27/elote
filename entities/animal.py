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
        ]
        return animals