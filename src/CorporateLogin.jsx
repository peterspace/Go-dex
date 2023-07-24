import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CTAButton } from './uiComponents/Buttons';
import GlassmorphicWrapper from './uiComponents/GlassmorphicWrapper';
import Spinner from './uiComponents/Spinner';
import { useNavigate } from 'react-router-dom';

const emptyInputValues = {
  bankId: '',
  cachierId: '',
  password: '',
};

const CorporateLogin = () => {
  const navigate = useNavigate();
  const [isLaunch, setIsLaunch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [inputValues, setInputValues] = useState(emptyInputValues);

  function onChange(e) {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  }

  function login() {
    setIsLoading(true);
    console.table(inputValues);
  }

  useEffect(() => {
    if (isLaunch) {
      setTimeout(() => {
        navigate('/bank/bsp');
        setIsLaunch(false);
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLaunch]);

  return (
    <div className="relative">
      {/* ==================== Gradients on Background ==================== */}
      <div className="fixed bg-no-repeat bg-cover w-screen min-h-screen bg-tailwind-blue-dark z-0">
        <section className="opacity-30">
          <div className="absolute -left-48 -top-48 w-[500px] h-[400px] rounded-full filter blur-3xl bg-gradient-to-br from-pink-500 to-white/30"></div>
          <div className="absolute right-80 top-[25%] w-[300px] h-[300px] rounded-full filter blur-3xl bg-gradient-to-br from-white via-blue-500 to-transparent"></div>
          <div className="absolute left-80 top-[50%] w-[40%] h-[30%] rounded-full filter blur-3xl bg-gradient-to-br from-white via-blue-500 to-transparent"></div>
        </section>
      </div>

      <div className="relative h-screen">
        <div className="h-full flex flex-col container">
          <div className="mt-6 mx-auto text-2xl text-gray-300">
            Partner Login
          </div>

          <span>
            <Link to="/bank/bsp">
              <h3 className="text-white">Go Exchange</h3>
            </Link>
          </span>

          <section className="my-auto flex flex-col items-center">
            <GlassmorphicWrapper shadow="false">
              <div className="flex flex-col gap-6">
                <div className="input-group-custom">
                  <label htmlFor="bankId" className="input-label">
                    Partner ID
                  </label>
                  <input
                    type="text"
                    id="bankId"
                    name="bankId"
                    className="input-custom"
                    value={inputValues['bankId']}
                    onChange={onChange}
                  />
                </div>

                <div className="input-group-custom">
                  <label htmlFor="cachierId" className="input-label">
                    Cachier ID
                  </label>
                  <input
                    type="text"
                    id="cachierId"
                    name="cachierId"
                    className="input-custom"
                    value={inputValues['cachierId']}
                    onChange={onChange}
                  />
                </div>

                <div className="input-group-custom">
                  <label htmlFor="password" className="input-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="input-custom"
                    value={inputValues['password']}
                    onChange={onChange}
                  />
                </div>
                <div className="self-end">
                  {/* <CTAButton>
                                        <button className="bg-transparent" type="button" disabled={isLoading} onClick={() => login()}>
                                            {!isLoading ? 'Login' : <Spinner />}
                                        </button>
                                    </CTAButton> */}
                  <div className="">
                    <CTAButton>
                      <button
                        className="bg-transparent"
                        type="button"
                        disabled={isLoading}
                        onClick={() => setIsLaunch(true)}
                      >
                        {/* Login */}
                        {!isLoading ? 'Login' : <Spinner />}
                      </button>
                    </CTAButton>
                  </div>
                </div>
              </div>
            </GlassmorphicWrapper>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CorporateLogin;
