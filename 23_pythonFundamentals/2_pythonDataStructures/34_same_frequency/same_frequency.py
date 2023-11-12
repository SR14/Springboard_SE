def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    num1_list = list(map(int, str(num1)))
    num2_list = list(map(int, str(num2)))
    
    num1_dict = {}
    num2_dict = {}
    
    # make sure they have same digits
    if set(num1_list) != set(num2_list):
        return False
    # if they do, fill in dictionaries w/ digits counts
    else: 
        for num in num1_list:
            if num in num1_dict.keys():
                num1_dict[num] += 1
            else:
                num1_dict[num] = 1
        for num in num2_list:
            if num in num2_dict.keys():
                num2_dict[num] += 1
            else:
                num2_dict[num] = 1
                
    # check all match
    for key in num1_dict.keys():
        if num1_dict[key] != num2_dict[key]:
            return False
        
    # if no inequality is flagged
    return True
        
    