def two_list_dictionary(keys, values):
    """Given keys and values, make dictionary of those.
    
        >>> two_list_dictionary(['x', 'y', 'z'], [9, 8, 7])
        {'x': 9, 'y': 8, 'z': 7}
        
    If there are fewer values than keys, remaining keys should have value
    of None:
    
        >>> two_list_dictionary(['a', 'b', 'c', 'd'], [1, 2, 3])
        {'a': 1, 'b': 2, 'c': 3, 'd': None}
    
    If there are fewer keys, ignore remaining values:

        >>> two_list_dictionary(['a', 'b', 'c'], [1, 2, 3, 4])
        {'a': 1, 'b': 2, 'c': 3}
    """
    n_keys = len(keys)
    n_val  = len(values)
    abs_diff = abs(n_keys - n_val)
    new_dict = {}
    
    if n_keys > n_val:
        for i in range(abs_diff):
           values.append(None)
        for idx in range(n_keys):
            new_dict[keys[idx]] = values[idx]
            
    elif n_val > n_keys:
        for i in range(abs_diff):
            values.pop()
            
        for idx in range(n_keys):
            new_dict[keys[idx]] = values[idx]
            
    else:
        for idx in range(n_keys):
            new_dict[keys[idx]] = values[idx]
            
    return new_dict
        
        
            
       