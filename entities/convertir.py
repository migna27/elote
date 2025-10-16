class Convertir:
    def __init__(self, money):
        self.money = money

    def convertir(self) -> float:
        conversion_rate = 18.3  # Ejemplo de tasa de conversión
        dolares = self.money / conversion_rate
        return dolares