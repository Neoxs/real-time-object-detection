export const drawRect = (detections, ctx) =>{
    // Loop through each prediction
    detections.forEach(prediction => {
  
      // Extract boxes and classes
      const [x, y, width, height] = prediction['bbox']; 
      const text = prediction['class']; 
      const score = prediction['score']; 
  
      // Set styling
      const color = "ffffff";
      ctx.strokeStyle = '#' + color
      ctx.font = '18px Arial';
  
      // Draw rectangles and text
      ctx.beginPath();   
      ctx.fillStyle = '#' + color
      ctx.fillText(`${text} ${Number(score).toFixed(2)}`, x, y);
      ctx.rect(x, y + 5, width, height); 
      ctx.stroke();
    });
  }