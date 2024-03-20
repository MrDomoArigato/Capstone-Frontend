export default function CurrentBalance() {
    return (
      <>
        <h4>Current Balance</h4>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
                
              <div className="card-body">
                <h5 className="card-title">Current Balance</h5>
                <p>{testtransactions[0].Balance}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}