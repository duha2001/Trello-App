import Box from '@mui/material/Box';
import ListColumns from './ListColumns/ListColumns';
import { mapOrder } from '~/utils/sorts';
import {
  DndContext,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { useState, useEffect } from 'react';
import { arrayMove } from '@dnd-kit/sortable';

function BoardContent({ board }) {
  // Yêu cầu chuột di chuyển 10px thì mới kích hoạt event, fix trường hợp click bị gọi event
  // Nếu dùng pointerSensor mặc định thì phải kết hợp thuộc tính CSS Touch-action ở những phần tử kéo thả - còn bug
  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: { distance: 10 },
  // });

  // Yêu cầu chuột di chuyển 10px thì mới kích hoạt event, fix trường hợp click bị gọi event
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });

  // Nhấn giữ 250ms và dung sai của cảm ứng thì mới kích hoạt event
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 },
  });

  // Ưu tiên sử dụng kết hợp 2 loại sensors là mouse và touch để có trải nghiệm trên mobile tốt nhất, không bị bug.
  const sensors = useSensors(mouseSensor, touchSensor);

  const [orderedColumns, setOrderedColumns] = useState([]);

  // useEffect xử lý gọi API
  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'));
  }, [board]);

  // Hàm để xử lý kéo thả column
  const handleDragEnd = (event) => {
    // console.log('handleDragEnd: ', event);
    const { active, over } = event;

    // Kiểm tr nếu không tồn tại over (Kéo ra ngoài thì return tránh gặp lỗi)
    if (!over) return;

    // Nếu vị trí sau khi kéo thả khác với vị trí ban đầu
    if (active.id !== over.id) {
      // Lấy vị trí cũ ( từ thằng active )
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id);
      // Lấy vị trí mới (từ thằng over)
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id);

      /**
       * Dùng arrayMove của thằng dnd-kit để sắp xếp lại mảng Column ban đầu
       */
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex);

      // Dùng để xử liệu gọi API
      // const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id);
      // console.log(dndOrderedColumnsIds);

      // Cập nhập lại state columns ban đầu sau khi đã kéo thả
      setOrderedColumns(dndOrderedColumns);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
          width: '100%',
          height: (theme) => theme.Trello.boardContentHeight,
          p: '10px 0',
        }}
      >
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  );
}

export default BoardContent;
