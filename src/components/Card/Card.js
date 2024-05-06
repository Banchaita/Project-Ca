import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faRegistered, faClock, faUsers, faPercent ,faMoneyCheckDollar,faCalculator,faFile} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Card = () => {
  return (
    <div className="grid-container">
      {/* <div className="card-container">
        <div className="card">
          <a href="/service/start_a_business/proprietorship">
            <div className="card--display">
              <FontAwesomeIcon
                icon={faBuilding}
                size="xl"
                style={{ color: "#05044D"}}
              />
              <h2>Start A Business</h2>
            </div>
              
            <div className="card--hover">
              <h2>Start A Business</h2>
              <p>
                Starting a company or setting up a business is not an easy task.
                Therefore, at Purminder Kaur & Associates we offer solutions for
                all clients.
              </p>
              <p className="link">View More</p>
            </div>
          </a>
          <div className="card--border"></div>
        </div>
      </div> */}

      <div className="card-container">
        <div className="card">
          <Link to="/service/registration/proprietorship">
            <div className="card--display">
              <FontAwesomeIcon
                icon={faRegistered}
                size="xl"
                style={{ color: "#05044D"}}
              />
              <h2>Registration</h2>
            </div>
            <div className="card--hover">
              <h2>Registration</h2>
              <p>
                Incorporation of the company or firm is the first step to
                commencing a business in India.
              </p>
              <p className="link">View More</p>
            </div>
          </Link>
          <div className="card--border"></div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <Link to="service/compliance/change_company_name">
            <div className="card--display">
                <FontAwesomeIcon icon={faUsers} size="xl" style={{color: "#05044D"}}/>
              <h2>Compliance</h2>
            </div>
            <div className="card--hover">
              <h2>Compliance</h2>
              <p>
                 We offer comprehensive services designed to keep businesses compliant with various reporting and regulatory 
                 requirements and to support them in growth and development..
              </p>
              <p className="link">View More</p>
            </div>
          </Link>
          <div className="card--border"></div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <Link to="/service/auditing">
            <div className="card--display">
                <FontAwesomeIcon icon={faClock} size="xl" style={{color: "#05044D"}} />
              <h2>Auditing</h2>
            </div>
            <div className="card--hover">
              <h2>Auditing</h2>
              <p>
                An audit is more than a formality; it is a necessity to protect your business and encourage it to thrive. 
                Early warnings.
              </p>
              <p className="link">View More</p>
            </div>
          </Link>
          <div className="card--border"></div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <Link to="/service/tax_filing/business_tax_filing">
            <div className="card--display">
                <FontAwesomeIcon icon={faPercent} size="xl" style={{color: "#05044D"}}/>
              <h2>Tax Failing</h2>
            </div>
            <div className="card--hover">
              <h2>Tax Failing</h2>
              <p>
                As a chartered accountant company, we promise to guide you in all tax planning. Apart from all types of domestic tax.
              </p>
              <p className="link">View More</p>
            </div>
          </Link>
          <div className="card--border"></div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <Link to="/service/funding/business_plan_preparation">
            <div className="card--display">
                <FontAwesomeIcon icon={faMoneyCheckDollar} size="xl" style={{color: "#05044D"}}/>
              <h2>Funding</h2>
            </div>
            <div className="card--hover">
              <h2>Funding</h2>
              <p>
                A business plan is a vital document for any business that contains information about the pertaining to its promoters, 
                business model, operations, past, competitor analysis, market analysis and project financial performance.
              </p>
              <p className="link">View More</p>
            </div>
          </Link>
          <div className="card--border"></div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <Link to="/service/documentcenter">
            <div className="card--display">
                <FontAwesomeIcon icon={faFile} size="xl" style={{color: "#05044D"}}/>
              <h2>Document Center</h2>
            </div>
            <div className="card--hover">
              <h2>Document Center</h2>
              <p>
                Document management software for accountants is an important part of a paperless home office. 
                Just like paper, all digital/electronic documents need to be stored securely so they can be retrieved and used as needed
              </p>
              <p className="link">View More</p>
            </div>
          </Link>
          <div className="card--border"></div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <Link to="/service/accounting">
            <div className="card--display">
                <FontAwesomeIcon icon={faCalculator} size="xl" style={{color: "#05044D"}}/>
              <h2>Accounting</h2>
            </div>
            <div className="card--hover">
              <h2>Accounting</h2>
              <p>
                We do more than Accounting. We take a comprehensive assessment of your finances and create a forecast through the year to keep your business in a healthy and prosperous state.
              </p>
              <p className="link">View More</p>
            </div>
          </Link>
          <div className="card--border"></div>
        </div>
      </div>




    </div>
  );
}

export default Card;

