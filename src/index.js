function blockquote (call_site, ...placeholder_values) {

    if (!Array.isArray(call_site)) {
        throw new Error(
            'block-quote should be called via "bq`foo`;" and not as a function'
        );
    }

    var base_indent = 0;
    // FIXME: replace might not be the most elegant way to do that
    call_site[0].replace(/^\s*\n(\s*)/, (m, white) => {
        base_indent = white.length;
    });

    // FIXME: theese escapes are so wierd, can we do better?
    var cut = new RegExp(`\\n\\s{${base_indent}}`, 'g');

    return (
        call_site
        .map((str, i) => {

            str = str.replace(cut, '\n');

            if (placeholder_values[i] === undefined) {
                str += ''    
            }
            else {
                var local_indent = 0;
                // FIXME: replace might not be the most elegant way
                str.replace(/\n?(\s*)$/, (m, white) => {
                    local_indent = white.length;
                });

                var arg = placeholder_values[i].replace(
                    /\n/g,
                    '\n' + ' '.repeat(local_indent)
                );

                str += arg;
            }

            return str;
        })
        .join('')
        .trim()
    )
}

module.exports = blockquote;
