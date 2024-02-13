export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <div>
            <div className="container-fluid bg-dark text-light p-4 mt-5 fs-5">
                <div className="d-flex flex-row align-item-center justify-content-center">
                   <p> Developed by <a className="text-decoration-none text-info" href="https://alex-njuguna.github.io" target="_blank"> Alex Njuguna</a> using <a className="text-decoration-none text-danger" href="https://omdbapi.com/" target="_blank">OMDB api</a>.&copy; {year}</p>
                </div>
                
            </div>
        </div>
    )
}