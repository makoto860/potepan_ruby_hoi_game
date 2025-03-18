begin

def janken_phase
  puts "じゃんけんぽん"
  puts "0(グー) 1(チョキ) 2(パー) 3(戦わない)"
  player_hand= gets.to_i
  program_hand = rand(0..2)

  if player_hand == 3
    puts "戦わないを選びました。"
    puts "じゃんけんを終ります。"
    return
  end

  if player_hand < 0 || player_hand > 3
    puts "不正な値です。0から3までの数字を入力してください。"
    puts "じゃんけんを終ります。"
    return
  end

  hands = ["グー", "チョキ", "パー"]
  puts "あなたの手: #{hands[player_hand]}"
  puts "相手の手: #{hands[program_hand]}"

  if  (player_hand == 0 && program_hand == 1) ||
    (player_hand == 1 && program_hand == 2) ||
    (player_hand == 2 && program_hand == 0)
    puts "じゃんけんに勝ちました。"
    hoi_phase("win")

  elsif
    (player_hand == program_hand)
    puts "あいこです。"
    janken_phase

  else
    (player_hand == 0 && program_hand == 2) ||
    (player_hand == 1 && program_hand == 0) ||
    (player_hand == 2 && program_hand == 1)
    puts "じゃんけんに負けました。"
    hoi_phase("lose")
  end
end

def hoi_phase(result)
  puts "あっち向いてほい"
  puts "0(上) 1(下) 2(左) 3(右)"

  player_direction = gets.to_i
  program_direction = rand(0..3)

  directions = ["上", "下", "左", "右"]
  puts "あなた: #{directions[player_direction]}"
  puts "相手: #{directions[program_direction]}"

  if player_direction < 0 || player_direction > 3
    puts "不正な値です。0から3までの数字を入力してください。"
    puts "あっちむいてほいを終わります。"
    return
  end

  if player_direction == program_direction
    if result == "win"
      puts "あなたの勝ちです。"
    elsif result == "lose"
      puts "あなたの負けです。"
    end

    else
      puts "勝負がつきませんでした。じゃんけんに戻ります。"
      return janken_phase
    end

  end

  janken_phase

  rescue Interrupt
    puts "あっちむいてホイを終了しました。"
  end
