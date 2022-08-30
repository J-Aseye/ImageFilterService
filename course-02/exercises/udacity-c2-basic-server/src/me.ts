// Super Simple Unit Functions

export const concat = (a: string, b: string) => {
    
    if (!a||!b)
    {
      throw new Error('No string found');
      
    }
    return a + b;

    }
