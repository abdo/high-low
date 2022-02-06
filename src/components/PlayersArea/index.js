import { useDispatch, useSelector } from 'react-redux';

import PlayerArea from 'components/PlayerArea';
import Text from 'components/lib/Text';
import { setCurrentPlayer } from 'store/game/actions';
import { showModal } from 'store/general/actions';
import { useEffect } from 'react';

const PlayersArea = () => {
  const { playersInfo, currentPlayerId } = useSelector((state) => ({
    playersInfo: state.players.playersInfo,

    currentPlayerId: state.game.currentPlayerId,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentPlayerId) {
      dispatch(setCurrentPlayer({ playerId: playersInfo[0].id }));
    } else {
      const currentPlayerInfo = playersInfo.find(
        (info) => info.id === currentPlayerId,
      );
      showModal({
        content: (
          <>
            <Text type='h3' fw='bold'>
              It is your turn, {currentPlayerInfo?.name}
            </Text>
          </>
        ),
        isNotClosable: true,
        isTemporaryModal: true,
      });
    }
  }, [currentPlayerId]); // eslint-disable-line

  return (
    <>
      {playersInfo.map((info) => (
        <PlayerArea
          key={info.id}
          playerInfo={info}
          allPlayersInfo={playersInfo}
        />
      ))}
    </>
  );
};

export default PlayersArea;
