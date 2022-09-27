const SignBlock = () => {
  const { ethereum } = window;
  const [isLoading, setIsLoading] = React.useState(false);

  const [addr, setAddr] = React.useState("");

  // update ui with loaded wallet
  if (ethereum) {
    ethereum.on("accountsChanged", (a) => setAddr(a.length ? a[0] : ""));
    ethereum.on("connect", (a) => setAddr(a.length ? a[0] : ""));
   
  }

  // load previously connected wallet
  React.useEffect(() => {
    if (ethereum) {
      
      ethereum
        .request({
          method: "eth_accounts",
        })
        .then((a) => setAddr(a[0]));
        
    }
  }, []);

  
  return (
          <WalletButton />
  )
};

const SignContainer = (props) => {
  const { children } = props;
  return (
    <>
      <div className="sign-container">{children}</div>
    </>
  );
};