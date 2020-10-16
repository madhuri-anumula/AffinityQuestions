

slurList={ 'gook': .4, 'sambo': .6, 'spook': .3, 'jap': .7, 'mongrel': .6, 'nigger': .8}

def ValidateFile():
    try:
        
        fp = open("TweetsFile.txt")
        try:
            textlines = fp.readlines()
            grossProfanityForLine = {}
            i = 0
            for line in textlines:
                print(line)
                i = i + 1
                degreeOfProfanity = 0
                for key in slurList:
                    slurWordIndex = line.find(key)
                    if slurWordIndex > 0:
                        degreeOfProfanity = degreeOfProfanity + slurList[key]
                    
                grossProfanityForLine[i]= round(degreeOfProfanity,2)
                print (degreeOfProfanity)
            
            
            print(grossProfanityForLine)
        

        except:
            raise Exception("Error:File read failed.")
        finally:
            fp.close()
    except IOError:
        raise Exception("Error:File not found.")

ValidateFile()