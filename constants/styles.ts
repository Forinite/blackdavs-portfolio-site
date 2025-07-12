export const scrollbarStyles = `
  @layer utilities {
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: rgb(64, 64, 64) rgb(23, 23, 23);
    }
    
    .custom-scrollbar::-webkit-scrollbar {
      width: 8px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgb(23, 23, 23);
      border-radius: 4px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: rgb(64, 64, 64);
      border-radius: 4px;
      border: 2px solid rgb(23, 23, 23);
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: rgb(96, 96, 96);
    }
  }
`
