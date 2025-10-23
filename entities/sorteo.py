import random
class Sorteo:
    def __init__(self)-> int:
        numero = random.randint(1, 100)
        return numero  
    
    @classmethod
    def ganador(self,ganador, num1, num2, num3)-> bool:
        ganador = int(ganador)
        num1 = int(num1)
        num2 = int(num2)
        num3 = int(num3)
        if ganador == num1 or ganador == num2 or ganador == num3:
            return True
        else:
            return False
        

        