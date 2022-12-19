export default function ChangePassword() {
    return (
        <>
            <div className="container-sm mt-middle-custom border border-dark pb-2" style={{ "max-width": "1000px" }}>
                <div className="text-center border border-dark rounded mt-3">Indonesia Open News
                    <br />User Signup
                </div>
                <form className="form-group">
                    <div className="row mt-3 mb-3">
                        <label for="password" className="col-sm-2 col-form-label ">Password</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="password" />
                        </div>
                    </div>
                    <div className="row mt-3 mb-3">
                        <label for="confirm_password" className="col-sm-2 col-form-label ">Confrim Password</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="confirm_password" />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="input" className="btn btn-success">ChangePassword</button>
                    </div>
                </form>
            </div>
        </>
    );
}