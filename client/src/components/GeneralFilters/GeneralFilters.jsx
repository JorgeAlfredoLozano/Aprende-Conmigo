import Button from 'react-bootstrap/Button';
import style from './GeneralFilters.module.css'

function GeneralFilters() {
  return (
    <div className={style.container}>
      <Button variant="outline-primary">Primaria</Button>{' '}
      <Button variant="outline-primary">Secundaria</Button>{' '}
      <Button variant="outline-primary">Universidad</Button>{' '}
    </div>
  );
}




export default GeneralFilters;