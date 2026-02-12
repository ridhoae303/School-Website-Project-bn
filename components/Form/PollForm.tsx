'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { apiClient } from '@/lib/api'
import { staggerContainerVariants, staggerItemVariants } from '@/lib/animations'

interface PollOption {
  id: string
  text: string
  votes: number
}

interface PollFormProps {
  pollId: string
  question: string
  options: PollOption[]
  onVoted?: () => void
}

export function PollForm({ pollId, question, options, onVoted }: PollFormProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasVoted, setHasVoted] = useState(false)

  const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0)

  const handleSubmitVote = async () => {
    if (!selectedOption) {
      toast.error('Pilih salah satu opsi terlebih dahulu')
      return
    }

    setIsLoading(true)
    try {
      await apiClient.submitVote(pollId, selectedOption)
      toast.success('Suara Anda berhasil dicatat!')
      setHasVoted(true)
      onVoted?.()
    } catch (error) {
      console.error('Poll vote error:', error)
      toast.error('Gagal mencatat suara. Silakan coba lagi.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl">
      <h3 className="text-xl font-bold mb-4">{question}</h3>

      <motion.div
        className="space-y-3"
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {options.map((option) => {
          const percentage = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0
          const isSelected = selectedOption === option.id

          return (
            <motion.div key={option.id} variants={staggerItemVariants}>
              <div
                className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  isSelected
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                } ${hasVoted ? 'cursor-default' : ''}`}
                onClick={() => !hasVoted && setSelectedOption(option.id)}
              >
                <div className="flex items-center justify-between relative z-10">
                  <label className="flex items-center gap-3 cursor-pointer flex-1">
                    <input
                      type="radio"
                      name="poll"
                      value={option.id}
                      checked={isSelected}
                      onChange={(e) => !hasVoted && setSelectedOption(e.target.value)}
                      disabled={hasVoted}
                      className="w-4 h-4"
                    />
                    <span className="font-medium">{option.text}</span>
                  </label>
                  <span className="text-sm font-semibold text-muted-foreground">
                    {option.votes}
                  </span>
                </div>

                {/* Progress Bar */}
                {hasVoted && (
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-secondary/20 rounded-lg"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                )}
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Info Text */}
      <p className="text-sm text-muted-foreground mt-4">
        Total suara: <span className="font-semibold">{totalVotes}</span>
      </p>

      {/* Submit Button */}
      {!hasVoted && (
        <Button
          onClick={handleSubmitVote}
          disabled={!selectedOption || isLoading}
          className="w-full mt-4"
        >
          {isLoading ? 'Memproses...' : 'Kirim Suara'}
        </Button>
      )}

      {hasVoted && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-700 font-medium">
            Terima kasih atas partisipasi Anda dalam jajak pendapat ini!
          </p>
        </div>
      )}
    </div>
  )
}
