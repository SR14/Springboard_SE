def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """
    
    letter_count_dict = {}
    
    for letter in phrase:
        # if letter is in dictionary, add 1 to count
        if (letter in letter_count_dict.keys()):
            letter_count_dict[letter] += 1
        # if letter is not in dictionary, add it and set count = 1
        else:
            letter_count_dict[letter] = 1
        
    return letter_count_dict
            