function rand( len, not ){
    if ( len === undefined ) len = 13;
    if ( typeof not !== 'string' ) not = '';
    if ( len === 'rand' ) len = Math.floor(Math.random() * (30 - 19) + 19);
    if ( typeof len === 'string' ) len = parseInt(len, 10);
    if ( len < 13 || isNaN(len)  ) len = 13;

    var s = '!@~!@#$%^&*()-_=+',
        n = '0123456789',
        u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        l = 'abcdefghijklmnopqrstuvwxyz',
        a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@~!@#$%^&*()-_=+',
      out = '';

    if ( (nl = not.length) > 0 ){
        var regex = '';
        for ( var i = 0; i < nl; i++ ){
            regex = not.charAt(i).replace(/[.*+?^${}()|[\]\\]/, '\\$&');
            regex = new RegExp( regex , 'g');
            if ( s.length > 0 ) s = s.replace( regex, '');
            if ( n.length > 0 ) n = n.replace( regex, '');
            if ( u.length > 0 ) u = u.replace( regex, '');
            if ( l.length > 0 ) l = l.replace( regex, '');
            a = a.replace( regex, '');
        }
    }

    if ( s.length > 0 ) out += s.charAt( Math.floor(Math.random() * s.length) );
    if ( n.length > 0 ) out += n.charAt( Math.floor(Math.random() * n.length) );
    if ( u.length > 0 ) out += u.charAt( Math.floor(Math.random() * u.length) );
    if ( l.length > 0 ) out += l.charAt( Math.floor(Math.random() * l.length) );

    for ( var i = out.length; i < len; i++) out += a.charAt( Math.floor(Math.random() * a.length) );


    out = out.split('').sort(function(a, b){return 0.5 - Math.random()}).join('');
    alert(out.length);
    return out;
}

function generate(){
    document.getElementById("result").value = rand( document.getElementById("length").value, document.getElementById("not").value );
}

