const knex = require('./db/client');
if (true) {
    knex.insert([{
                
                name: 'Canada',
                code: 'CA'
            },
            {
                
                name: 'USA',
                code: 'US'
            },
            {
                
                name: 'United Kingdom',
                code: 'UK'
            },
            { id: 60, name: 'Bahamas, The', code: 'BHS' },
  {  name: 'Bahrain', code: 'BHR' },
  {  name: 'Bangladesh', code: 'BGD' },
  {  name: 'Barbados', code: 'BRB' },
  {  name: 'Belarus', code: 'BLR' },
  {  name: 'Belgium', code: 'BEL' },
  {  name: 'Belize', code: 'BLZ' },
  {  name: 'Benin', code: 'BEN' },
  {  name: 'Bermuda', code: 'BMU' },
  {  name: 'Bhutan', code: 'BTN' },
  {  name: 'Bolivia', code: 'BOL' },
  {  name: 'Bosnia and Herzegovina', code: 'BIH' },
  {  name: 'Botswana', code: 'BWA' },
  {  name: 'Brazil', code: 'BRA' },
  {  name: 'British Virgin Islands', code: 'VGB' },
  {  name: 'Brunei Darussalam', code: 'BRN' },
  {  name: 'Bulgaria', code: 'BGR' },
  {  name: 'Burkina Faso', code: 'BFA' },
  {  name: 'Burundi', code: 'BDI' }
  

        ])
        .into('countries').then(
            data => {
                console.log(data);
                knex.destroy();
            }
        )
}