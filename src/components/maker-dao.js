import React from 'react';

const MakerDAO = ({ makerDAO, updateCDP, logo }) => {
  let MakerDash = null;

  const MakerWatch = (
    <div className="MakerDAO__watchCDP">
      Please enter a CDP to watch
      <input onChange={(e) => updateCDP(e)} type="number" />
    </div>
  );

  if (makerDAO) {
    MakerDash = (
      <div className="MakerDAO">
        <div className="MakerDAO__card">
          <div className="MakerDAO__card__group">
            <div className="MakerDAO__card__group--heading">
              <div style={{ display: 'flex'}}>
                TOTAL DEBT
                <div className={`circle ${makerDAO.safe ? 'circle--green' : 'circle--red' }`} />
              </div>
            </div>
            <div className="MakerDAO__card__group--value">{makerDAO.debt}</div>
          </div>

          <div>
            <img width="55px" src={"https://easwap.com/img/logos/dai.svg"} alt="DAI logo" />
          </div>
        </div>


        <div className="MakerDAO__card">
          <div className="MakerDAO__card__group">
            <div className="MakerDAO__card__group--heading">TOTAL COLLATERAL</div>
            <div className="MakerDAO__card__group--value">{makerDAO.collateral.toFixed(2)}</div>
          </div>

          <div>
            <img width="55px" src={"https://easwap.com/img/logos/eth.svg"} alt="ETH logo" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="MakerDAO__container">
      <a target="_blank" rel="noopener noreferrer" href={makerDAO ? `https://makerscan.io/cups/${makerDAO.cdp}/` : 'https://makerscan.io/' }>
        <img width="55px" src={logo} alt="DAI logo" />
      </a>
      {makerDAO ? MakerDash : MakerWatch}
    </div>
  );
}

export default MakerDAO;
