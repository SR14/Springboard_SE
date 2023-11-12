def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}
        
        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """
    
    # define vowels
    vowels = 'aeiou'
    # preprocess phrase
    phrase = phrase.lower()
    # initialize letter dictionary
    vowel_dict = {}
    
    
    for letter in phrase:
        if letter in vowels:
            if letter in vowel_dict.keys():
                vowel_dict[letter] += 1
                
            else:
                vowel_dict[letter] = 1
                
    return vowel_dict
            