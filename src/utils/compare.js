//Comparison Functions

export function alpha( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }

    return 0;
}

export function alphaRev( a, b ) {
    if ( a.name > b.name ){
      return -1;
    }
    if ( a.name < b.name ){
      return 1;
    }

    return 0;
}

export function cmc( a, b ) {
    if ( a.cmc < b.cmc ){
      return -1;
    }
    if ( a.cmc > b.cmc ){
      return 1;
    }

    return 0;
}

export function cmcRev( a, b ) {
    if ( a.cmc > b.cmc ){
      return -1;
    }
    if ( a.cmc < b.cmc ){
      return 1;
    }

    return 0;
}
