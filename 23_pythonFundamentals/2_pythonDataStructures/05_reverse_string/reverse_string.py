def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """
    
    reversed_phrase = ''
    for letter in reversed(phrase):
        reversed_phrase += letter
        
    return reversed_phrase
        