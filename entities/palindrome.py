class Palindrome:
    def __init__(self, phrase):
        self.phrase = phrase
        
    def is_palindrome(self) -> bool:
        # Normalizar la cadena: quitar espacios y convertir a minúsculas
        normalized_phrase = "".join(filter(str.isalnum, self.phrase)).lower()
        # Comparar la cadena  con su inversa
        return normalized_phrase == normalized_phrase[::-1]