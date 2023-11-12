def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
    
    # preprocess
    phrase = phrase.lower().split(' ')
    
    # capitalized phrase
    cap_phrase = ''
    
    for word in phrase:
        cap_phrase += (word[0].upper() + word[1:]) + ' '
        
    return cap_phrase[:-1]
        
    
    
