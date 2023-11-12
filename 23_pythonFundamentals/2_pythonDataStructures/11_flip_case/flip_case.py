def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    # compilation of final phrase
    final_phrase = ''
    for letter in phrase:
        # compare like items
        if letter.lower() == to_swap.lower():
            final_phrase += letter.swapcase()
        # if they don't match, append same case letter
        else:
            final_phrase += letter
        
    # after iterating through all letters
    return final_phrase
        
            
    
