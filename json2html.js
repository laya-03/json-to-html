export default function json2html(data) {
    // Collect all unique keys from the data to use as table headers
    const headers = Array.from(new Set(data.flatMap(Object.keys)));

    // Start building the HTML string
    let html = '<table data-user="mahilaya2003@gmail.com">\n<thead>\n<tr>';

    // Add table headers
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });

    html += '</tr>\n</thead>\n<tbody>\n';

    // Add table rows
    data.forEach(row => {
        html += '<tr>';
        headers.forEach(header => {
            html += `<td>${row[header] || ''}</td>`;
        });
        html += '</tr>\n';
    });

    html += '</tbody>\n</table>';

    return html;
}
