import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
    onPageChange: Function;
}

function Pagination({ page, onPageChange } : Props) {

    return (
        <div className="d-flex row">
            <nav>
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number - 1)}>Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number + 1}</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number + 1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;