import React, { useState } from 'react';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

import { signIn } from 'next-auth/react';
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { useAuthRequestChallengeEvm } from '@moralisweb3/next';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const WalletConnectButton = () => {
  const message = '';
  const [loading, setLoading] = useState(false);
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();
  const { push } = useRouter();

  const [proceed, setProceed] = useState(false);
  const [check, setCheck] = useState(false);

  const handleAuth = async (wal: any) => {
    setLoading(true);
    setProceed(true);
    if (isConnected) {
      await disconnectAsync();
    }

    // const userData = { network: "evm"};

    const { account, chain } = await connectAsync({
      connector: new WalletConnectConnector({
        options: {
          projectId: '1186a3265ee6207255fd4ef7ecfd2868',
          showQrModal: true,
        },
      }),
    });

    // const userData = {address: account, chain: chain.id, network: "evm"};

    const { message }: any = await requestChallengeAsync({
      address: account,
      chainId: chain.id,
    });
    setCheck(true);
    setLoading(false);
    const signature = await signMessageAsync({ message });

    setLoading(true);
    await signIn('moralis-auth', {
      message,
      signature,
      redirect: true,
      callbackUrl: '/',
    });

    setCheck(false);
    setLoading(false);
    setProceed(false);
    // push(url);
  };

  return (
    <button
      onClick={handleAuth}
      disabled={proceed}
      type='button'
      className={`text-gray-900 bg-blue-200 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center  align-center justify-center transform ${
        proceed && 'cursor-wait'
      }`}
    >
      {loading ? (
        <svg
          aria-hidden='true'
          className='inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400'
          viewBox='0 0 100 101'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill='currentColor'
          />
          <path
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='currentFill'
          />
        </svg>
      ) : (
        <Image 
        src='/walletconnect.svg'
        width={50}
        height={50}
        alt='wallet connect'
        className=''
        />
      )}
      {check
        ? 'Wallet Connect을 확인하세요.'
        : 'Wallet Connect로 로그인 하세요.'}
    </button>
  );
};

export default WalletConnectButton;
