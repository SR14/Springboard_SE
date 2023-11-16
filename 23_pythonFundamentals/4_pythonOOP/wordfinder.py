"""Word Finder: finds random words from a dictionary."""
import random

class WordFinder:

    # create constructor function    
    def __init__(self, filepath):
        # read words from file
        self.words = self.readFile(filepath)

    
    def readFile(self, filepath):
        # read files
        with open(filepath) as f:
            lines = f.read().splitlines()
        print("{} words read".format(len(lines)))
        # return read words
        return lines
    
    def random(self):
        # generate random idx 
        random_idx = random.randrange(len(self.words))
        # return word at idx
        return self.words[random_idx]
    
class SpecialWordFinder(WordFinder):

    # create constructor function    
    def __init__(self, filepath):
        # read words from file
        super().__init__(filepath)

    
    def readFile(self, filepath):
        # return read words
        return super().readFile(filepath)
    
    def random(self):
        return super().random()