const dataExample = [
    {
        company: 'Alfreds <b>Futterkiste</b>',
        chef: 'Maria Anders',
        country: 'Germany',
        employees: 222
    },
    {
        company: 'Centro comercial Moctezuma',
        chef: 'Francisco Chang',
        country: 'Mexico',
        employees: 422
    },
    {
        company: 'Ernst Handel',
        chef: 'Roland Mendel',
        country: 'Austria',
        employees: 22
    },
    {
        company: 'Island Trading',
        chef: 'Helen Bennett',
        country: 'UK',
        employees: 1422
    },
    {
        company: 'Laughing Bacchus Winecellars',
        chef: 'Yoshi Tannamuri',
        country: 'Canada',
        employees: 14422
    }
];

let gridView = new GridView();
const data = {
    //element html
    header: 'my table',
    headerClass: ['header'],
    attribute: {
        'company': {
            'label': 'Компания',
            'src': 'html',
        },
        'chef': {
            'label': 'Директор',
        },
        'country': {
            'label': 'Страна',
            'value': (data) => {
                if (data['country'] === 'Germany') {
                    return data['country'] + ' map'
                }
                return data['country'];
            }
        },
        'employees': {
            'label': 'Работники',

        }
    },
    data: dataExample
}
gridView.data = dataExample;
gridView.render(data);


